import * as S from './style';

import NavigationHeader from '@components/molecules/NavigationHeader';

export default function withNavigation(
  navigationTitle = 'Empty Title',
  WrappedContent,
  CustomBackButton
) {
  return (props) => {
    return (
      <S.Layout>
        <NavigationHeader
          title={navigationTitle}
          CustomBackButton={CustomBackButton}
        />

        <WrappedContent {...props} />
      </S.Layout>
    );
  };
}
