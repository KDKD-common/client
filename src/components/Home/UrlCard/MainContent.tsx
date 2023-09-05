import HStack from '@/components/common/Stack/HStack';
import VStack from '@/components/common/Stack/VStack';
import { Label, Title } from '@/components/common/Typography';
import { UrlInfo } from '../SearchResult';
import { ColorPalette } from '@/styles/ColorPalette';
import S from './styles';

interface Props {
  urlInfo: UrlInfo;
}

function MainContent({ urlInfo }: Props) {
  return (
    <VStack gap={8}>
      <VStack>
        <Title>{urlInfo.name}</Title>
        <HStack gap={8} alignItems="center">
          <Label style={{ color: ColorPalette.gray[400] }}>
            {urlInfo.category.fullName} | {urlInfo.urlAddress}
          </Label>
        </HStack>
      </VStack>
      <HStack gap={4}>
        {urlInfo?.tag &&
          urlInfo.tag.map((tag, idx) => (
            <S.Tag key={idx}>
              <span style={{ color: ColorPalette.blue[200] }}># </span>
              <Label className="label-14-400">{tag}</Label>
            </S.Tag>
          ))}
      </HStack>
    </VStack>
  );
}

export default MainContent;
