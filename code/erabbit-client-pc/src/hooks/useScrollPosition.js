import {
  useEffect,
  useState
} from "react"
import {
  useDispatch
} from "react-redux"

import {
  changeIsFixedHeaderAction
} from "@/store/modules/main"

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    // 定义监听滚动条滚动函数
    function handleScrollPosition() {
      const y = window.scrollY
      if (y >= 53) {
        dispatch(changeIsFixedHeaderAction(true))
      } else {
        dispatch(changeIsFixedHeaderAction(false))
      }

      setScrollY(y)
    }

    window.addEventListener('scroll', handleScrollPosition)

    return () => {
      window.removeEventListener('scroll', handleScrollPosition)
    }
  }, [dispatch])

  return {
    scrollY,
  }
}

export default useScrollPosition