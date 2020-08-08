import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startSorting } from "../../Actions";

interface IState {
  shouldSort: boolean;
}

const mapStateToProps = (state: IState) => ({ shouldSort: state.shouldSort });

const mapDispatchToProps = (dispatch: any) => ({
  startSorting: (shouldSort: boolean) => dispatch(startSorting({ shouldSort }))
});

const Wrapper = styled.div`
  width: 10%;
  align-items: center;
  justify-content: center;
  margin: auto 2% auto 2%;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: var(--start);
  cursor: pointer;
`;
const P = styled.p`
  text-transform: uppercase;
  font-family: Open Sans;
  color: white;
  font-size: 1vw;
  letter-spacing: 2px;
`;

interface IProps {
  startSorting: (shouldStart: boolean) => void;
  shouldSort: boolean;
}

const StartButton: React.FC<IProps> = ({ startSorting, shouldSort }) => (
  <Wrapper>
    <Button onClick={() => startSorting(!shouldSort)}>
      <P>{shouldSort ? "Reset" : "Start"}</P>
    </Button>
  </Wrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton);
