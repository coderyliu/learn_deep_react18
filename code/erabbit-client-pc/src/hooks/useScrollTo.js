// ?界面跳转，滚动条滚动到顶部
import {
  useEffect
} from "react";
import {
  useLocation
} from "react-router-dom";

function useScrollTo() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}

export default useScrollTo