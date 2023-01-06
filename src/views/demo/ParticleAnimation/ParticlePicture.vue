<!--
 * @ Author: willysliang
 * @ Create Time: 2023-01-06 15:08:15
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-06 18:17:35
 * @ Description: ParticlePicture 图片粒子化
 -->
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import {
  demoParticlePicture1,
  demoParticlePicture2,
  demoParticlePicture3,
  demoParticlePicture4,
  demoParticlePicture5,
} from '@/assets/images'

const logolist = reactive([
  { label: 'kazimierz', url: demoParticlePicture1 },
  { label: 'rhine', url: demoParticlePicture2 },
  { label: 'rhodes', url: demoParticlePicture3 },
  { label: 'victoria', url: demoParticlePicture4 },
  { label: 'yan', url: demoParticlePicture5 },
])

const constant = {
  /** 设置画布大小 */
  width: 360,
  height: 360,
  /** 设置粒子动画时长 */
  animateTime: 30,
  opacityStep: 1 / 30,
  /** 中心影响的半径 */
  Radius: 40,
  /** 排斥/吸引 力度 */
  Inten: 0.95,
}

/**
 * 画布类
 */
class ParticleCanvas {
  canvasEle: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  ParticleArr: any[]
  mouseX?: number // 鼠标X轴位置
  mouseY?: number // 鼠标Y轴位置
  constructor (targetEle: HTMLCanvasElement) {
    // 设置画布 获取画布上下文
    this.canvasEle = targetEle
    this.ctx = targetEle.getContext('2d') as CanvasRenderingContext2D
    this.width = targetEle.width
    this.height = targetEle.height
    this.ParticleArr = []
    this.listenerMousemove()
  }

  /** 监听鼠标移动 */
  listenerMousemove () {
    this.canvasEle.addEventListener('mousemove', (e) => {
      const { left, top } = this.canvasEle.getBoundingClientRect()
      const { clientX, clientY } = e
      this.mouseX = clientX - left
      this.mouseY = clientY - top
    })
    this.canvasEle.onmousemove = () => {
      this.mouseX = 0
      this.mouseY = 0
    }
  }

  /** 改变图片 如果已存在图片则根据情况额外操作 */
  changeImg (img: LogoImg) {
    if (this.ParticleArr.length) {
      // 获取新旧两个粒度数组与它们的长度
      const newPrtArr = img.particleData
      const newLen = newPrtArr.length
      let arr = this.ParticleArr
      const oldLen = arr.length

      // 调用 change 修改已存在粒子
      for (let idx = 0; idx < newLen; idx++) {
        const { totalX, totalY, color } = newPrtArr[idx]
        if (arr[idx]) {
          // 找到已存在的粒子，调用change 接收新粒子的属性
          arr[idx].change(totalX, totalY, color)
        } else {
          // 新粒子数组较大，生成缺少的粒子
          arr[idx] = new Particle(totalX, totalY, constant.animateTime, color)
        }
      }

      // 新粒子数组较小，删除多余的粒子
      if (newLen < oldLen) this.ParticleArr = arr.splice(0, newLen)
      arr = this.ParticleArr
      let tempLen = arr.length

      // 随机打乱粒子最终对应的位置，使切换效果更自然
      while (tempLen) {
        // 随机的一个粒子 与 倒序的一个粒子
        const randomIdx = ~~(Math.random() * tempLen--)
        const randomPrt = arr[randomIdx]
        const { totalX: tx, totalY: ty, color } = randomPrt

        // 交换目标位置与颜色
        randomPrt.totalX = arr[tempLen].totalX
        randomPrt.totalY = arr[tempLen].totalY
        randomPrt.color = arr[tempLen].color
        arr[tempLen].totalX = tx
        arr[tempLen].totalY = ty
        arr[tempLen].color = color
      }
    } else {
      this.ParticleArr = img.particleData.map(
        (item) =>
          new Particle(
            item.totalX,
            item.totalY,
            constant.animateTime,
            item.color,
          ),
      )
    }
  }

  drawCanvas () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ParticleArr.forEach((particle) => {
      particle.update(this.mouseX, this.mouseY)
      particle.draw()
    })
    window.requestAnimationFrame(() => this.drawCanvas())
  }
}

/** 画布参数配置 */
const canvas = reactive({
  /** 画布的上下文 */
  context: {} as CanvasRenderingContext2D,
  // /** canvas实体对象 */
  particleCanvas: {} as ParticleCanvas,
})
const canvasRef = ref<HTMLCanvasElement>()

/**
 * @Particle 粒子类
 */
class Particle {
  x: number // 粒子x轴的初始位置
  y: number // 粒子y轴的初始位置
  totalX: number // 粒子x轴的目标位置
  totalY: number // 粒子y轴的目标位置
  mx?: number // 粒子x轴需要移动的距离
  my?: number // 粒子y轴需要移动的距离
  vx?: number // 粒子x轴移动速度
  vy?: number // 粒子y轴移动速度
  time: number // 粒子移动耗时
  r: number // 粒子的半径
  color: number[] // 粒子的颜色
  opacity: number // 粒子的透明度
  constructor (totalX: number, totalY: number, time: number, color: number[]) {
    // 设置粒子的初始位置x、y，目标位置totalX、totalY，总耗时time
    this.x = (Math.random() * constant.width) >> 0
    this.y = (Math.random() * constant.height) >> 0
    this.totalX = totalX
    this.totalY = totalY
    this.time = time

    // 设置粒子的颜色和半径
    this.r = 1.2
    this.color = [...color]
    this.opacity = 0
  }

  /** 在画布中绘制粒子 */
  draw () {
    canvas.context.fillStyle = `rgba(${this.color.toString()})`
    canvas.context.fillRect(this.x, this.y, this.r * 2, this.r * 2)
    canvas.context.fill()
  }
}

/**
 * @LogoImg logo图片类
 */
class LogoImg {
  src: string
  name: string
  particleData: Particle[] // 用于保存筛选后的粒子
  constructor (src: string, name: string) {
    this.src = src
    this.name = name
    this.particleData = []
    this.imgOnload()
  }

  imgOnload () {
    const img = new Image()
    img.crossOrigin = ''
    img.src = this.src

    // canvas 解析数据源获取粒子数据
    img.onload = () => {
      // 获取图片像素数据
      const tempCanvas = document.createElement('canvas')
      const tempCtx = tempCanvas.getContext('2d')
      const imgW = constant.width
      const imgH = ~~(imgW * (img.height / img.width))
      tempCanvas.width = imgW
      tempCanvas.height = imgH

      // 将图片绘制到 canvas 中
      tempCtx?.drawImage(img, 0, 0, imgW, imgH)

      // 获取像素点数据
      tempCtx?.clearRect(0, 0, constant.width, constant.height)
    }
  }
}

/** 存储由 logolist 生成的logoImg对象 */
const logoImg = reactive({
  list: [] as LogoImg[],
  currentIdx: 0,
  currentLogoItem: {} as LogoImg,
})

/** 激活logo */
const handleLogoImg = (particleCanvas: ParticleCanvas, logoItem: LogoImg) => {
  logoImg.currentLogoItem = logoItem
  canvas.particleCanvas = particleCanvas
}

onMounted(() => {
  if (canvasRef.value) {
    canvas.context = canvasRef.value.getContext(
      '2d',
    ) as CanvasRenderingContext2D
    canvas.particleCanvas = new ParticleCanvas(canvasRef.value)
    canvas.particleCanvas.drawCanvas()
  }

  /** 将logo数据实例化为logoImg对象 */
  for (const item of logolist) {
    logoImg.list.push(new LogoImg(item.url, item.label))
  }
})
</script>

<template>
  <div class="ParticlePicture-page">
    <div class="canvas-container">
      <canvas
        ref="canvasRef"
        :width="constant.width"
        :height="constant.height"
      ></canvas>
    </div>

    <ul
      class="w-11/12 mx-auto flex flex-row justify-around box-border py-2 border border-solid border-gray-300 rounded-2xl"
    >
      <li
        v-for="(item, index) in logoImg.list"
        :key="index"
        :class="[
          'flex flex-col items-center justify-between w-1/6 box-border p-2',
          logoImg.currentLogoItem === item && 'active',
        ]"
        data-cursor="pointer"
        @click="handleLogoImg(canvas.particleCanvas, item)"
      >
        <img :src="item.src" class="w-full" />
        <span class="text-gray-200">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.ParticlePicture-page {
	width: 100%;
	background-color: #000;
	box-sizing: border-box;
	padding: 1rem 0;

	.active {
		@apply bg-gray-500 rounded-2xl;
	}
}
</style>
