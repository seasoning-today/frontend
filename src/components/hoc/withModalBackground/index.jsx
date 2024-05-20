import * as S from './style';

export default function withModalBackground(WrappedModal) {
  return (props) => {
    const handleBackgroundClick = (event) => {
      if (event.target === event.currentTarget) {
        props.onCloseModal();
      }
    };

    return (
      <S.Background onClick={handleBackgroundClick}>
        <WrappedModal {...props} />
      </S.Background>
    );
  };
}
