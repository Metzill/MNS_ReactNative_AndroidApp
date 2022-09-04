import {ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CardProduct from '../components/CardProduct';
import {useEffect} from 'react';

const QuoteList = ({navigation}) => {
  const [listeQuote, setlisteQuote] = useState([]);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/quotes')
      .then(json => json.json())
      .then(resultat => {
        let i = 0;
        resultat.forEach(animeQuote => {
          animeQuote.id = i;
          i++;
          animeQuote.anime.replace(" ","%20");
          fetch(`https://kitsu.io/api/edge/anime?filter[text]=${animeQuote.anime}`)
          .then(json => json.json())
          .then(resultat => {
            animeQuote.thumbnail = resultat.data[0].attributes.posterImage.tiny;
          });
        });
        setlisteQuote(resultat);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  }, []);


  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {listeQuote.map(quote => (
        <TouchableOpacity
          key={quote.id}
          onPress={() => navigation.navigate('Product details', {
            quote: quote.quote,
            character: quote.character,
            anime: quote.anime,
            })}>
          <CardProduct
            character={quote.character}
            anime={quote.anime}
            description={quote.quote}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default QuoteList;
