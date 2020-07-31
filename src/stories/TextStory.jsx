import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
    .addWithJSX('기본설정', () => <Text>안녕하세요</Text>)
    .addWithJSX('large ver', () => <Text large>Hello, Large!</Text>)
    .addWithJSX('xlarge ver', () => <Text xlarge>Hello, Xlarge!</Text>)
    .addWithJSX('small ver', () => <Text small>Hello, Small!</Text>)
    .addWithJSX('xsmall ver', () => <Text xsmall>Hello, Xsmall!</Text>)
    .addWithJSX('primary ver', () => <Text Primary>Hello, Primary!</Text>)
    .addWithJSX('secondary ver', () => <Text secondary>Hello, Secondary!</Text>)
    .addWithJSX('large and Primary ver', () => <Text primary large>Hello, Large and Primary!</Text>);