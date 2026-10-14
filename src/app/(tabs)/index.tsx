import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

export default function Index() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, 700) - 44;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <View style={{ width: contentWidth }}>
        <Text style={styles.label}>DOBRODOŠEL V MOJEM SVETU</Text>
        <Text style={styles.title}>Moji hobiji</Text>
        <Text style={styles.subtitle}>
          War Thunder, fitnes in glasba.
        </Text>

        <Image
          source={require('../../../assets/hobiji/warthunder.png')}
          style={[styles.image, { width: contentWidth }]}
          resizeMode="contain"
          accessibilityLabel="Posnetek iz igre War Thunder"
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Kaj me veseli?</Text>
          <Text style={styles.text}>
            Prosti čas rad preživljam ob igranju War Thunderja,
            treniranju v fitnesu in poslušanju glasbe.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Tri stvari, ki me zanimajo
          </Text>

          <Text style={styles.hobby}>WAR THUNDER</Text>
          <Text style={styles.text}>
            Tanki, letala.
          </Text>

          <Text style={styles.hobby}>FITNES</Text>
          <Text style={styles.text}>
            Trening, vztrajnost in osebni napredek.
          </Text>

          <Text style={styles.hobby}>GLASBA</Text>
          <Text style={styles.text}>
            Metal, RAMMSTEIN
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
    paddingVertical: 22,
    paddingBottom: 36,
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
    fontSize: 38,
    fontWeight: '800',
  },
  subtitle: {
    color: '#b8bec9',
    fontSize: 17,
    marginTop: 8,
    marginBottom: 20,
  },
  image: {
    height: 180,
    backgroundColor: '#101318',
    borderRadius: 18,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#232833',
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#c5cbd5',
    fontSize: 16,
    lineHeight: 25,
  },
  hobby: {
    color: '#ffd33d',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 5,
  },
});