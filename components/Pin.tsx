import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Pin = (props: any) => {
  const { id, image, title } = props.pin;

  const navigation = useNavigation();

  const onLike = () => {};

  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const goToPinPage = () => {
    navigation.navigate('PinScreen', { id: id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={20} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: '100%',
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    margin: 5,
    color: '#181818',
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  heartBtn: {
    backgroundColor: '#CCC',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 6,
    borderRadius: 50,
  },
});

export default Pin;
