import {Image} from '@chakra-ui/react';

function FlagImg({ lang }: { lang: string }) {

    return (
        <Image src={`react-test/flags/${lang}.png`} alt={lang} />
    );
}

export default FlagImg;