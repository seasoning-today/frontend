import * as S from './style';

import CollageCard from '@components/molecules/CollageCard';

export default function CollageGrid({
  collageData,
  imageEnabled,
  labelEnabled,
}) {
  const terms = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <S.Layout>
      {terms.map((term) => {
        const collageItemData = collageData.find((item) => item.term === term);

        return (
          <CollageCard
            key={term}
            term={term}
            image={
              collageItemData !== undefined && collageItemData.image !== null
                ? collageItemData.image
                : null
            }
            articleId={
              collageItemData !== undefined ? collageItemData.articleId : null
            }
            imageEnabled={imageEnabled}
            labelEnabled={labelEnabled}
          />
        );
      })}
    </S.Layout>
  );
}
