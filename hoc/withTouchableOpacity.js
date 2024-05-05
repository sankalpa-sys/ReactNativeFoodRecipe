import { TouchableOpacity } from 'react-native';
const withTouchableOpacity = (WrappedComponent) => {
    return (props) => {
        const {onPress, ...rest} = props;
        return(
            <TouchableOpacity onPress={onPress}>
                <WrappedComponent {...rest}/>
            </TouchableOpacity>
        )
    }
}

export default withTouchableOpacity;