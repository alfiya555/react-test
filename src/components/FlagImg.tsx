import {Box} from '@chakra-ui/react';

function FlagImg({ lang }: { lang: string }) {

    return (
        <Box>
            {lang === 'en' && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAADp0lEQVR4nO1WC09TSRS+f9BoBFLXRKOQmBCEFJ9kU3EjSgjsisFqFEWTXYkuCQ+V8iiP7VJXbQtYkGtfFrW0txRKH/f20tLXtzlTKKUtT7Mh2TjJlzuZzDnf+eaeM3M47sf4348e3af5Hp3lK6Gxc7Kv5PrInZ1Q3qx70t7YYXlZ/bOXQHNa282u5PrInT+0c5MvNQaXtqF1hRttfQBhOQTBH4bXL2J4Joj6P79B9aI47g8KmG5pg6u6moHmtLbdfkJTnxuzXyV81o7BWFIK3dV6cG9OnQV/8SJiXi82hhBMomNCRMtgqAAvDBG42tuxrFIx0JzWiu0lvPogIyJF8UWtxmRZGQJv30JrsIEbfu9IeJ4/h+noUdAX6TQjTyTT+MsSxa9DByO+Px6GwxeHyPP4cPo07DduIBEOM9+jRjs4RcP4IkUVsM9jtrISczU1iLrdWfWePPV7Ic6ojOHbo0cwHTsGX39/1p87kMTlh+/9jJg23xsLw+aJYjv1f9sy6nciJh/2xTjk+XnMnjuHT1euYG1pqcCHomF8MUucG23A5txW/cCMXJSY7OTVRDZwb3d3NnCye5xzakWJd1OfTKULiBcCCcQEAXNKJT6eP4/owkKBypYc/4xYqdavUMTF8I8jhoDVDuu1a3B3diKdTDKH+cSy08n2UIDpVIrt8UspaGbkon6Vav0Kp6m7lSLj/YCvqsoS03y/9pq6WynOUFqWdbIfSM3NDAexNZSW4fCINYd11MptkmuUX4UYzSQKJQwlDiUQJVJ+cq3nExsbiebq6IDLF0XvlFw8uRR55dQ6HILBGduoHnaH87W1+FhVhVWXC05fooB4YFaGEMpkPLOh0qqpwUxFBfwWB/qm5cJyyiXufCdhJbIZ/pJWy+qYrr6QtIYuYybiYhfIb0MhVrPJdXMqPTol45EjmdMS1qAeDW8lzlcZDwRgValgLi9HxGaD1RvH3XWj3e7qJ3pxi3rJaoX5zBnwly4h6Pahd1rOEDc8mwzmqvTrdDAdPw7n7dsQw1H0TG09pr08EqR+Ikd9Krb5YCxrtRh49znO0dvIrjdJgqOpCdMnTyJsNoP3xNG2rvKg7/FTvQRvjvqQyYQphQL6C3VgxGzhxAlGLAUjBcnwPY1A/r9PiCImaq+CozaE2hFqS8xfJDT2LuzYxhyk9SG0DQpweiOsxep/w4Mb+6VZfD1o9P0+NGfaS8P2Pc3eTzdH1F3jFvsrvdVz2E3uj8H95+Nfk+QSdgOE8cUAAAAASUVORK5CYII=" />}
            {lang === 'ru' && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nO2SoQqDUBSGz6PtCTRrETEZlIWBaTCYSYNlb7Cg0bDhhBvEsAkTTC6trRjVIkzuPWMP4bHcD778wX8OgISKc/bcrCEkrBker09PacKaAdKy7cYvIqVp2XYyjHLqcannsgI2O6c7UmoFbAYjKHiY9UipERRchpFsatPPBfWNTT8XYB2upNEw6/HfBNuL0T1eSLW9GKHWdD5FEVJaazqXYZRTT0s9V6Wo4u24pFaKKuC222/XECRAxA8EgfK15as8sgAAAABJRU5ErkJggg==" />}
            {lang === 'fr' && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAn0lEQVR4nGNgGAX0Av7Vmx0I4aqZ+1MWbz/tQAzeVN+ZctzZ2YEQZgiq3fkxa+qFD/hwYufev8evPf5ADD4aHff3bnr6B3z4tKfnR4bw5n0vurd/+I8PJ3Xu+/Pp1///xOATMXF/vvf3/8eHz/n7vxi1+P9oUHePJq5fo9np/2gB8me0yPw+Wkn4j1aL20dCtRg0UI09/4Fq3o4CBjoBAF0046GODfTbAAAAAElFTkSuQmCC" />}
        </Box>
    );
}

export default FlagImg;