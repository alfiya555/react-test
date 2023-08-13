import { connect } from 'react-redux';
import { setFormValues, setImage } from "../store/actions";
import UserList from '../components/UserForm';

const mapStateToProps = (state: any) => ({
    formValues: state.formValues,
    image: state.image,
})

const mapDispatchToProps = (dispatch: any) => ({
    setFormValues: (formValues: Record<string, string>) => dispatch(setFormValues(formValues)),
    setImage: (image: string) => dispatch(setImage(image)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)
