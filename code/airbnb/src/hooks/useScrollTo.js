// 自定义hook
import {
  useEffect
} from "react";
import {
  useLocation
} from "react-router-dom";

// 功能：路由跳转，回滚到页面顶部
function useScrollTo() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}

export default useScrollTo