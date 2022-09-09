import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Colors';
import GlobalStyles from '../GlobalStyles';

const QuoteDetails = (route, navigation) => {
  let anime = route.route.params.anime;
  let character = route.route.params.character;
  let quote = route.route.params.quote;
  const [thumbnail, setThumbnail] = useState(null);
  useEffect (() => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${anime}`)
            .then(json => json.json())
            .then(resultat => {
              setThumbnail(resultat.data[0].attributes.posterImage.medium);
            });
  }, []);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" 
    style={{backgroundColor: '#B4E197'}}>
      <View style={[styles.card, GlobalStyles.shadow]}>
        <View style={styles.contentCard}>
        <Image style={styles.image} source={{uri: thumbnail }} />
          <Text style={styles.titleCard}>ANIME : {anime}</Text>
          <Text style={styles.subtitleCard}>CHARACTER : {character}</Text>
          <Text
            ellipsizeMode="tail"
            style={styles.descriptionCard}>
            {quote}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  descriptionCard: {
    fontFamily: 'Comfortaa Medium',
    fontSize: 16,
    flex: 1,
    padding: 10,
    color: Colors.black
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageCard: {
    backgroundColor: '#EEE',
  },
  contentCard: {
    padding: 10,
    flexShrink: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    padding: 10,
    color: Colors.black,
  },
  subtitleCard: {
    fontSize: 14,
    fontWeight: 'italic',
    fontFamily: 'Comfortaa',
    padding: 10,
    color: Colors.black,
  },
  test: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    height: 1200,
    borderRadius: 5,
    backgroundColor: "#E9EFC0"
  },
});

export default QuoteDetails;
