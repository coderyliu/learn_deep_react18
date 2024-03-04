// ?在react-router 6.x以前提供给了我门一个withRouter高阶组件用于对组件进行拦截，赋予路由跳转等功能
// ?但是在react-router 6.x中这个API被废弃了，所以我们可以自己封装一个这样的高阶组件
import {
  useNavigate,
  useParams,
  useRoutes,
  useSearchParams,
} from "react-router-dom";

function withRouter(OriginComponent) {
  // ?记住：hooks只能在函数式组件和其它hooks中使用，不能再class组件中使用
  function NewComponent(props) {
    // ?并且，hooks的使用必须在函数组件的头部，先执行

    // todo 1.增加路由跳转的功能
    const navigate = useNavigate();

    // todo 2.增加获取动态路由参数的功能 /detail/:id
    const params = useParams();

    // todo 3.增加获取路由的query参数功能
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    // todo 4.增加useRoutes功能
    // const useRoutes=useRoutes

    const router = { navigate, params, query };

    return <OriginComponent {...props} router={router}></OriginComponent>;
  }

  return NewComponent;
}

export default withRouter;
