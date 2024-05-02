import * as S from './style';

import NavigationHeader from '@components/molecules/NavigationHeader';

export default function withNavigation(
  navigationTitle = 'Empty Title',
  WrappedContent
) {
  return (props) => {
    return (
      <S.Layout>
        <NavigationHeader title={navigationTitle} optionType="icon" />
        <WrappedContent {...props} />
      </S.Layout>
    );
  };
}
