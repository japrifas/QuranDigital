import QuranKemenag from 'quran-kemenag';
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScaledText, Row, Col, ImgIcon, Box, Padder } from 'urip-rn-kit';
import Icons from '../assets/icons';
import Images from '../assets/images';


interface DetailScreen {
    navigation: any
    route: any;
}


const DetailScreen = (props: DetailScreen) => {
    const [surah, setSurah]: [surah: any, setSurah: any] = React.useState(null)
    const [verses, setVerses]: [verses: any[], setVerses: any] = React.useState([])
    React.useEffect(() => {
        const { surahNumber } = props.route.params;
        getData(surahNumber);
    }, [])

    const getData = async (surah_id: number) => {
        const quran = new QuranKemenag()
        const data = await quran.getSurah(surah_id)
        setSurah(data)
        setVerses(data.verses || [])
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#2C3E50', flex: 1 }} >
            <Row height={50}>
                <Col justifyCenter alignCenter>
                    <ImgIcon onPress={() => props.navigation.goBack()} source={Icons.back} size={35} tintColor='white' />
                </Col>
                <Col size={5} justifyCenter>
                    <ScaledText style={{ color: 'white', }}>
                        {surah ? surah.surah_name : ''}
                    </ScaledText>
                </Col>
            </Row>
            <Padder horizontal={20}>
                <Box borderRadius={20} height={100} fullWidth backgroundImage={Images.bg}>
                    <ScaledText>{surah ? surah.surah_name : ''}</ScaledText>
                    <ScaledText>{surah ? surah.surah_name_bahasa : ''}</ScaledText>
                    <ScaledText>{surah ? surah.surah_verse_count : ''}</ScaledText>
                </Box>
            </Padder>










        </SafeAreaView >
    )
}

export default DetailScreen