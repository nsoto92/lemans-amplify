import { useTheme, View, Image, Text, Theme } from '@aws-amplify/ui-react';

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image alt="LeMans Logo" src="/lemans.png" height={300} />
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
};


const theme: Theme = {
    name: 'Auth Theme',
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: '#CDAA00',
          },
          link: {
            color: '#CDAA00',
          },
      },
    },
  },
};

export const AmplifyLoginConfig = { components, theme };