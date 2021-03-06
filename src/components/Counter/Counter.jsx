import { connect } from "react-redux"
import { increment, decrement } from "redux/counter/counter-actions";
import { Container, BtnsContainer, Value } from "./Counter.styled";

function Counter({ value, step, onIncrement, onDecrement }) {

    return (
        <Container>
            <Value>{value}</Value>
            <BtnsContainer>
                <button type="button" onClick={onIncrement}>Увеличить на {step}</button>
                <button type="button" onClick={onDecrement}>Уменьшить на {step}</button>
            </BtnsContainer>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        value: state.counter.value,
        step: state.counter.step,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(increment(10)),
        onDecrement: () => dispatch(decrement(10)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);