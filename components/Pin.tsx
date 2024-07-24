import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Pin = (props: any) => {
  const { image, title } = props.pin;

  const [ratio, setRatio] = useState(1);

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={styles.pin}>
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
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: '100%',
    borderRadius: 25,
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
