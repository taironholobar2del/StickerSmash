import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, 700) - 40;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <View style={{ width: contentWidth }}>
        <Text style={styles.label}>AVTOR APLIKACIJE</Text>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>TH</Text>
          </View>
          <Text style={styles.name}>Tairon Holobar</Text>
          <Text style={styles.subtitle}>
            Računalništvo • igre • fitnes • glasba
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Kdo sem?</Text>
          <Text style={styles.text}>
            Sem Tairon, dijak programa tehnik računalništva.
            Zanimajo me računalniki, tehnologija in ustvarjanje
            aplikacij.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Moj prosti čas</Text>
          <Text style={styles.text}>
            V prostem času igram War Thunder, hodim v fitnes
            in poslušam metal. Zanimajo me tudi tanki in letala.
          </Text>
          <Text style={[styles.text, styles.paragraph]}>
            Med mojimi najljubšimi skupinami so Rammstein,
            Metallica in Sabaton.
          </Text>
        </View>

        <View style={styles.card}>


          <Text style={styles.detail}>IZDELAVA</Text>
          <Text style={styles.text}>React Native in Expo</Text>

          <Text style={[styles.detail, styles.paragraph]}>
            PREIZKUŠANJE
          </Text>
          <Text style={styles.text}>
            Expo Go in Android emulator
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#15181e',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingBottom: 36,
  },
  label: {
    color: '#ffd33d',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 24,
  },
  profile: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#ffd33d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  initials: {
    color: '#15181e',
    fontSize: 34,
    fontWeight: '800',
  },
  name: {
    color: '#ffffff',
    fontSize: 29,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#b8bec9',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#232833',
    padding: 20,
    borderRadius: 20,
    marginBottom: 18,
  },
  heading: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    color: '#c5cbd5',
    fontSize: 16,
    lineHeight: 25,
  },
  paragraph: {
    marginTop: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#3a4150',
    marginVertical: 20,
  },
  detail: {
    color: '#ffd33d',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 5,
  },
  footer: {
    color: '#929aaa',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },
});