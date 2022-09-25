import React, { PureComponent } from 'react'
import withRouter from '../../../hoc/widthRouter'

export class HomeSongMenu extends PureComponent {
  constructor(props){
    super(props)

    this.state={
      menuLists:[
        {id:111,name:'华语流行'},
        {id:112,name:'欧美流行'},
        {id:113,name:'热门歌曲'}
      ]
    }
  }

  navigateToDetail(id){
    const {navigate}=this.props.router
    navigate(`/detail/${id}`)
  }

  render() {
    const {menuLists}=this.state

    return (
      <div>
        <h2>Song Menu List</h2>
        <ul>
          {
            menuLists.map(item=>{
              return (
                <li onClick={(e)=>this.navigateToDetail(item.id)} key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)