<template>
  <div class="fullpage"
       ref="fullPage"
       @touchstart="touchStart"
       @touchmove="touchMove"
       @touchend="touchEnd">
    <div class="translatePage" v-if="!isScroll" ref="translatePage">
      <slot></slot>
    </div>
    <slot v-if="isScroll"></slot>
    <div class="dot" v-if="!isScroll&&isDots" ref="dot">
      <div class="dots"
           ref="dots"
           v-for="(item,index) in dots"
           :class="{ac:page===index}"
           @click="dotClick(index)"
      ></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      isScroll: {
        type: Boolean,
        default: true
      },
      scrollTime: {
        type: Number,
        default: 500
      },
      isDots: {
        type: Boolean,
        default: false
      },
      toPage: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        dots: [],
        page: 0,
        start: 0,
        end: 0
      }
    },
    created() {
      this.touch = {}
    },
    methods: {
      touchStart(ev) {
        if (!this.touched) {
          return
        }
        this.touch.initiated = true
        const touch = ev.touches[0]
        this.deltaY = 0
        this.touch.startY = touch.pageY
      },
      touchMove(ev) {
        if (!this.touch.initiated) {
          return
        }
        const touch = ev.touches[0]
        this.deltaY = touch.pageY - this.touch.startY
      },
      touchEnd() {
        this.touch.initiated = false
        if (this.deltaY < -20) {
          this.page++
          if (this.page >= this.$refs.translatePage.children.length) {
            this.page = this.$refs.translatePage.children.length - 1
            return
          }
          if (this.isScroll) {
            this.scrollTo(this.page)
          } else {
            this.translateTo(this.page)
          }
          this.$emit('currentPage', this.page)
        }
        if (this.deltaY > 20) {
          this.page--
          if (this.page < 0) {
            this.page = 0
            return
          }
          if (this.isScroll) {
            this.scrollTo(this.page)
          } else {
            this.translateTo(this.page)
          }
          this.$emit('currentPage', this.page)
        }
      },
      _initFullPage() {
        if (!this.$refs.fullPage) {
          return
        }
        this.dots = []
        let children = this.$refs.fullPage.children
        children = this.isScroll ? this.$refs.fullPage.children : this.$refs.translatePage.children
        for (let i = 0; i < children.length; i++) {
          children[i].className += ' fullpages'
          this.dots.push(i)
        }
        if (!this.isScroll) {
          this.$refs.fullPage.style.overflow = `hidden`
          this.$refs.translatePage.style.webkitTransform = `translate3d(0px,0px,0px)`
          this.$emit('maxPage', children.length)
          if (!this.isDots) {
            return
          }
          setTimeout(() => {
            let height = (this.$refs.dot.offsetHeight - 20) / this.dots.length
            height = height > 15 ? 15 : height
            for (let i = 0; i < this.dots.length; i++) {
              this.$refs.dots[i].style.width = `${height}px`
              this.$refs.dots[i].style.height = `${height}px`
            }
          }, 20)
        }
      },
      getScrollTop() {
        let scrollTop = 0
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop
        } else if (document.body) {
          scrollTop = document.body.scrollTop
        }
        return scrollTop
      },
      addMouseWheel(fn) {
        if ((navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)) {
          document.addEventListener('DOMMouseScroll', fn, false)
        } else if (document.addEventListener) {
          document.addEventListener('mousewheel', fn, false)
        } else if (document.attachEvent) {
          document.attachEvent('onmousewheel', fn)
        } else {
          document.onmousewheel = fn
        }
      },
      scrollTo(y, time = this.scrollTime) {
        y = document.documentElement.clientHeight * y
        let timer = null
        let n = this.getScrollTop()
        clearInterval(timer)
        timer = setInterval(() => {
          if (n <= y) {
            n += document.documentElement.clientHeight * 30 / time
            window.scrollTo(0, n)
            if (n >= y) {
              clearInterval(timer)
              window.scrollTo(0, y)
            }
          }
          if (n > y) {
            n -= document.documentElement.clientHeight * 30 / time
            window.scrollTo(0, n)
            if (n <= y) {
              clearInterval(timer)
              window.scrollTo(0, y)
            }
          }
        }, 30)
      },
      translateTo(y, time = this.scrollTime) {
        y = document.documentElement.clientHeight * y
        let timer = null
        let n = Math.abs(parseInt(this.$refs.translatePage.style.webkitTransform.replace('translate3d(0px, ', '').replace('px, 0px)')))
        clearInterval(timer)
        timer = setInterval(() => {
          if (n <= y) {
            n += document.documentElement.clientHeight * 30 / time
            this.$refs.translatePage.style.webkitTransform = `translate3d(0,${-n}px,0)`
            if (n >= y) {
              this.$refs.translatePage.style.webkitTransform = `translate3d(0,${-y}px,0)`
              clearInterval(timer)
            }
          }
          if (n > y) {
            n -= document.documentElement.clientHeight * 30 / time
            this.$refs.translatePage.style.webkitTransform = `translate3d(0,${-n}px,0)`
            if (n <= y) {
              this.$refs.translatePage.style.webkitTransform = `translate3d(0,${-y}px,0)`
              clearInterval(timer)
            }
          }
        }, 30)
      },
      dotClick(index) {
        let changePage = Math.abs(this.page - index)
        this.page = index
        this.translateTo(this.page, this.scrollTime / changePage)
        this.$emit('currentPage', this.page)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._initFullPage()
      })
      document.documentElement.clientWidth <= 450 ? this.touched = true : this.touched = false
      window.addEventListener('resize', () => {
        this._initFullPage()
        document.documentElement.clientWidth <= 450 ? this.touched = true : this.touched = false
      })
      if (this.isScroll) {
        setTimeout(() => {
          this.$emit('currentPage', this.page)
        }, 20)
        this.addMouseWheel((ev) => {
          if (!this.$refs.fullPage) {
            return
          }
          ev = ev || event
          this.start = new Date().getTime()
          let delta = ev.wheelDelta || -ev.detail
          if (this.end - this.start < -this.scrollTime) {
            if (delta && delta > 0) {
              this.page = Math.round(this.getScrollTop() / document.documentElement.clientHeight)
              this.page--
              if (this.page < 0) {
                this.page = 0
                return
              }
              this.$emit('currentPage', this.page)
              this.scrollTo(this.page)
              this.$emit('path', false)
            }
            if (delta && delta < 0) {
              this.page = Math.round(this.getScrollTop() / document.documentElement.clientHeight)
              this.page++
              if (this.page >= this.$refs.fullPage.children.length) {
                this.page = this.$refs.fullPage.children.length - 1
                return
              }
              this.$emit('currentPage', this.page)
              this.scrollTo(this.page)
              this.$emit('path', true)
            }
            this.end = new Date().getTime()
          } else {
            ev.preventDefault()
          }
        })
      } else {
        setTimeout(() => {
          this.$emit('currentPage', this.page)
        }, 20)
        this.addMouseWheel((ev) => {
          if (!this.$refs.translatePage) {
            return
          }
          ev = ev || event
          this.start = new Date().getTime()
          let delta = ev.wheelDelta || -ev.detail
          if (this.end - this.start < -this.scrollTime) {
            if (delta && delta > 0) {
              this.page--
              if (this.page < 0) {
                this.page = 0
                return
              }
              this.$emit('currentPage', this.page)
              this.translateTo(this.page)
              this.$emit('path', false)
            }
            if (delta && delta < 0) {
              this.page++
              if (this.page >= this.$refs.translatePage.children.length) {
                this.page = this.$refs.translatePage.children.length - 1
                return
              }
              this.$emit('currentPage', this.page)
              this.translateTo(this.page)
              this.$emit('path', true)
            }
            this.end = new Date().getTime()
          } else {
            ev.preventDefault()
          }
        })
      }
    },
    watch: {
      toPage(val) {
        let changePage = Math.abs(this.page - val)
        this.page = val
        if (this.isScroll) {
          this.scrollTo(this.page, this.scrollTime / changePage)
        } else {
          this.translateTo(this.page, this.scrollTime / changePage)
        }
        this.$emit('currentPage', this.page)
      }
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  .fullpage {
    width: 100%;
    height: 100%;
    .translatePage {
      width: 100%;
      height: 100%;
      transform: translate(0px, 0px, 0px);
    }
    .fullpages {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .dot {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 10000;
      margin: auto 0;
      height: fit-content;
      width: 20px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-between;
      .dots {
        cursor: pointer;
        margin: 10px auto;
        border: 1px solid #54beed;
        border-radius: 50%;
        transition: all 0.3s;
        &.ac {
          background-color: #54beed;
          border: 1px solid #54beed;
        }
      }
    }
  }
</style>
