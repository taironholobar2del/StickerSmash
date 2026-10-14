import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';

export default function HobijiScreen() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, 700) - 40;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <View style={{ width: contentWidth }}>
        <Text style={styles.label}>MOJ PROSTI ČAS</Text>
        <Text style={styles.title}>Moji hobiji</Text>
        <Text style={styles.intro}>
          Igre, trening in glasba so pomemben del mojega vsakdana.
        </Text>

        <View style={styles.card}>
          <Image
            source={require('../../../assets/hobiji/warthunder.png')}
            style={{ width: contentWidth, height: 190 }}
            resizeMode="contain"
          />
          <View style={styles.body}>
            <Text style={styles.number}>01 / IGRE</Text>
            <Text style={styles.heading}>War Thunder</Text>
            <Text style={styles.text}>
              War Thunder igram, ker me zanimajo tanki, letala
              in vojaška tehnika.
            </Text>

            <Text style={styles.tag}>TANKI • LETALA • TAKTIKA</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../../assets/hobiji/fitnes.jpg')}
            style={{ width: contentWidth, height: 230 }}
            resizeMode="contain"
          />
          <View style={styles.body}>
            <Text style={styles.number}>02 / TRENING</Text>
            <Text style={styles.heading}>Fitnes</Text>
            <Text style={styles.text}>
              Fitnes je moj aktivni hobi.
            </Text>
            <Text style={styles.tag}>MOČ • VZTRAJNOST • NAPREDEK</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../../assets/hobiji/glasba.webp')}
            style={{ width: contentWidth, height: 210 }}
            resizeMode="contain"
          />
          <View style={styles.body}>
            <Text style={styles.number}>03 / GLASBA</Text>
            <Text style={styles.heading}>Metal in najljubši bendi</Text>
            <Text style={styles.text}>
             Glasba me spremlja med
              igranjem in treningom.
            </Text>
            <Text style={styles.text}>
              Med mojimi najljubšimi skupinami so Rammstein,
              Metallica in Sabaton.
            </Text>
            <Text style={styles.tag}>RAMMSTEIN • METALLICA • SABATON</Text>
          </View>
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
    paddingBottom: 40,
  },
  label: {
    color: '#ffd33d',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
  },
  intro: {
    color: '#b8bec9',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#232833',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
  },
  body: {
    padding: 20,
  },
  number: {
    color: '#ffd33d',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
  },
  heading: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 14,
  },
  text: {
    color: '#c5cbd5',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 14,
  },
  tag: {
    color: '#ffd33d',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 20,
  },
});