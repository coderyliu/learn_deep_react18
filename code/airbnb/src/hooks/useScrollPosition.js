import {
  useEffect,
  useState
} from "react";

function useScrollPosition() {
  // 状态来记录位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {
    function scrollEvent(e) {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  })

  return {
    scrollX,
    scrollY
  }
}

export default useScrollPosition