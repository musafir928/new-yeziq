import { useRef, useState } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    TextField
} from '@mui/material';
import FontPicker from 'font-picker-react';
import { translateUtil } from './yeziq';

function App() {
    const ot = useRef();
    const tt = useRef();
    const [ol, setOl] = useState('uy');
    const [tl, setTl] = useState('uy');
    const [oof, setOf] = useState('Open sans');
    const [tf, setTf] = useState('Open sans');

    const handleChnage = () => {
        const result = translateUtil(ot.current.value, ol + '|' + tl);
        tt.current.value = result;
    };

    return (
        <div className='App'>
            <div className='left'>
                <TextField
                    id='outlined-multiline-flexible'
                    label='menbe'
                    multiline
                    maxRows={13}
                    className='apply-font-origin'
                    dir='auto'
                    ref={ot}
                />
                <TextField
                    id='outlined-multiline-flexible'
                    label='target'
                    multiline
                    maxRows={12}
                    className='apply-font-target'
                    dir='auto'
                    ref={TextTrackCueList}
                />
            </div>
            <div className='right'>
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>مەنبە تىل</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={ol}
                        label='ol'
                        onChange={(e) => setOl(e.target.value)}
                    >
                        <MenuItem value='u'>uyghur</MenuItem>
                        <MenuItem value='l'>latin</MenuItem>
                        <MenuItem value='c'>cyrillic</MenuItem>
                    </Select>
                </FormControl>
                <Divider />
                <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>نىشان تىل</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={tl}
                        label='tl'
                        onChange={(e) => setTl(e.target.value)}
                    >
                        <MenuItem value='u'>uyghur</MenuItem>
                        <MenuItem value='l'>latin</MenuItem>
                        <MenuItem value='c'>cyrillic</MenuItem>
                    </Select>
                </FormControl>
                <Divider />
                <div className='fp'>
                    <FontPicker
                        apiKey='AIzaSyDmyY-2siMDS7mr2oFO9Rbs9aHpBQaBEIY'
                        activeFontFamily={oof}
                        pickerId='origin'
                        onChange={(nextFont) => setOf(nextFont.family)}
                    />
                    <div> menbe font</div>
                </div>
                <Divider />
                <div className='fp'>
                    <FontPicker
                        apiKey='AIzaSyDmyY-2siMDS7mr2oFO9Rbs9aHpBQaBEIY'
                        activeFontFamily={tf}
                        pickerId='target'
                        onChange={(nextFont) => setTf(nextFont.family)}
                    />
                    <div>nishan font</div>
                </div>
                <Divider />
                <Button variant='contained'>ئۆرۈش</Button>
            </div>
        </div>
    );
}

export default App;
