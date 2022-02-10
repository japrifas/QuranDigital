import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import QuranKemenag from 'quran-kemenag'
import { Surah } from 'quran-kemenag/dist/intefaces'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Row, ScaledText, Col, Line } from 'urip-rn-kit';

interface HomeScreenProps {
    navigation: any
}


const HomeScreen = (props: HomeScreenProps) => {
    const [ListOfSurah, setListOfSurah]: [ListOfSurah: Surah[], setListOfSurah: (value: any) => void] = React.useState([])
    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const quran = new QuranKemenag()
        const data = await quran.getListSurah()
        setListOfSurah(data)
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#2C3E50' }}>
            <FlatList
                data={ListOfSurah}
                keyExtractor={s => `${s.surah_id}`}
                renderItem={({ item, index }) => {
                    const onPress = () => {
                        props.navigation.navigate('Detail', { surahNumber: item.surah_id })
                    }
                    return <SurahItem key={index} data={item} onPress={onPress} />
                }}
            ></FlatList>
        </SafeAreaView>
    )
}

interface SurahItemProps {
    data: Surah;
    onPress: () => void;
}

const SurahItem = (props: SurahItemProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={{
                flexDirection: 'row', margin: 10, backgroundColor: '#E67E22',
                borderRadius: 20,
                height: 100,

            }}>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>{props.data.surah_id}</Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{props.data.surah_name}</Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>{props.data.surah_name_bahasa}</Text>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ color: 'white', fontSize: 30 }}> {props.data.surah_name_arabic}</Text>
                </View>

            </View >
        </TouchableOpacity>
    )
}
export default HomeScreen

