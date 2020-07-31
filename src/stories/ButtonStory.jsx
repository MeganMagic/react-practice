import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';

storiesOf('Button', module)
    .addWithJSX('default ver', () => <Button>submit</Button>)
    .addWithJSX('large ver', () => <Button large>submit</Button>)
    .addWithJSX('xlarge ver', () => <Button xlarge>submit</Button>)
    .addWithJSX('small ver', () => <Button small>submit</Button>)
    .addWithJSX('xsmall ver', () => <Button xsmall>submit</Button>)
    .addWithJSX('primary ver', () => <Button primary>submit</Button>)
    .addWithJSX('secondary ver', () => <Button secondary>submit</Button>)
    .addWithJSX('primary and large ver', () => <Button primary large>submit</Button>);