import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Colors';
import GlobalStyles from '../GlobalStyles';

const CardProduct = ({
  character,
  anime,
  description,
}) => {
  const [thumbnail, setThumbnail] = useState(null);
  useEffect (() => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${anime}`)
            .then(json => json.json())
            .then(resultat => {
              console.log(resultat.data[0].attributes.posterImage.medium);
              setThumbnail(resultat.data[0].attributes.posterImage.medium);
            });
  }, []);
  return (
    <View style={[styles.card, GlobalStyles.shadow]}>
       <View style={styles.imageCard}>
        <Image style={styles.image} source={{uri: thumbnail }} />
      </View>
      <View style={styles.contentCard}>
        <Text style={styles.titleCard}>{character}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.descriptionCard}>
          {description}
        </Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  descriptionCard: {
    fontFamily: 'Comfortaa Medium',
    fontSize: 16,
    flex: 1,
    color: Colors.black
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageCard: {
    width: 150,
    backgroundColor: '#EEE',
  },
  contentCard: {
    padding: 5,
    flexShrink: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
    color: Colors.black,
  },
  test: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    height: 200,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
});

export default CardProduct;
