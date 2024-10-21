import { Image, StyleSheet, Platform, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import { useLivePreview } from "@payloadcms/live-preview-react";
import { useEffect } from 'react';


const Header =()=> {

}




export default function HomeScreen() {


  const { data, isLoading } = useLivePreview({
    initialData: null,

    serverURL: "https://payload.demo.mapstory.io",
    depth: 2,
  });

  useEffect(()=> {
    console.log(data)

  },[])


  return (

        <Text >{data ? JSON.stringify(data,null,2):"Welcome"}</Text>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
