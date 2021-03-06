import { A, Header as HtmlHeader } from '@expo/html-elements';
import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { layout, colors, H5, H6, P, darkColors, useLayout } from '../common/styleguide';
import CustomAppearanceContext from '../context/CustomAppearanceContext';
import { Button } from './Button';
import { Logo, Plus } from './Icons';

const Header = () => {
  const { isDark, setIsDark } = useContext(CustomAppearanceContext);
  const { isSmallScreen } = useLayout();

  return (
    <HtmlHeader>
      <View style={styles.bannerContainer}>
        <P style={styles.bannerText}>
          Black Lives Matter.{' '}
          <A
            target="_blank"
            href="https://support.eji.org/give/153413/#!/donation/checkout"
            style={styles.bannerLink}>
            Support the Equal Justice Initiative
          </A>
          .
        </P>
      </View>
      <View
        style={[
          styles.header,
          {
            backgroundColor: isDark ? darkColors.veryDark : colors.gray7,
          },
        ]}>
        <View style={styles.headerContents}>
          <View style={styles.displayHorizontal}>
            <Logo fill={colors.primary} width={29} height={26} />
            <H5 style={isSmallScreen && styles.smallTitle}>
              <A href="/" style={styles.headerContentsTitle}>
                {isSmallScreen ? 'Directory' : 'React Native Directory'}
              </A>
            </H5>
            <H6 style={isSmallScreen && styles.smallTitle}>
              <A
                href="/explore"
                style={[
                  styles.headerSubpageTitle,
                  isSmallScreen && styles.headerSubpageTitleSmall,
                ]}>
                Explore
              </A>
            </H6>
          </View>
          <View style={styles.displayHorizontal}>
            <Button
              onPress={() => setIsDark(!isDark)}
              style={[styles.themeButton, isSmallScreen && styles.themeButtonSmall]}>
              <Text style={styles.themeButtonText}>{isDark ? '☀️' : '🌒'}</Text>
            </Button>
            <Button href="https://github.com/react-native-directory/website#how-do-i-add-a-library">
              <View style={styles.displayHorizontal}>
                <Plus width={14} height={14} fill={isDark ? colors.white : colors.black} />
                {!isSmallScreen && <P style={{ marginLeft: 6 }}>Add a library</P>}
              </View>
            </Button>
          </View>
        </View>
      </View>
    </HtmlHeader>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bannerContainer: {
    backgroundColor: '#000',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
    whiteSpace: 'nowrap',
  },
  headerContents: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: layout.maxWidth,
    paddingHorizontal: 16,
  },
  headerContentsTitle: {
    color: colors.primary,
    paddingLeft: 8,
    fontWeight: '600',
  },
  headerSubpageTitle: {
    color: colors.white,
    marginLeft: 32,
  },
  headerSubpageTitleSmall: {
    marginLeft: 20,
  },
  displayHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallTitle: {
    fontSize: 18,
  },
  themeButton: {
    marginRight: 12,
  },
  themeButtonText: {
    fontSize: 18,
    marginTop: -1,
  },
  themeButtonSmall: {
    maxHeight: 30,
    maxWidth: 46,
    paddingHorizontal: 14,
  },
});

export default Header;
