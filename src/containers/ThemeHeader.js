import {connect} from 'react-redux';
import ThemeHeader from '../components/ThemeHeader';

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

export default connect(mapStateToProps)(ThemeHeader);