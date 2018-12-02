import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import MyList from '../components/my-list';
import SearchContent from '../actions'; 

const mapStateToProps = state => ({
   search:state.state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleSearch: SearchContent 
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
