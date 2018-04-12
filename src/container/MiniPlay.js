import {connect} from 'react-redux'
import { setCurrentSong } from '../redux/actions'
import MiniPlay from '../components/Play/MiniPlay'

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  currentSong: state.song
})

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => ({
  changeSongDuration: (song) => {
    dispatch(setCurrentSong(song))
  }
})

// 将UI组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(MiniPlay)