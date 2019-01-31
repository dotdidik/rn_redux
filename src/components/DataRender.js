import React from 'react';
import { View, Button, Text } from 'native-base';

export default ({ post: { title, categories, content, id }, onDelete }) => {
  return (
    <View>
        <Text>{title}</Text>
        <Text>{categories}</Text>
        <Text>{content}</Text>
        <Button onPress={()=>onDelete(id)}><Text>Delete</Text></Button>
    </View>
  );
};