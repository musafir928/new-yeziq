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
import { translateUtil } from './yeziq';
import { Editor } from '@tinymce/tinymce-react';
import { auto } from '@popperjs/core';

function App() {
    const ot = useRef(null);
    const tt = useRef(null);
    const [ol, setOl] = useState('u');
    const [tl, setTl] = useState('u');

    const handleChange = () => {
        const result1 = translateUtil(ot.current.getContent({ format: 'text' }), ol + '|' + tl);
        tt.current.setContent(result1);
    };
    return (
        <div className='App'>
            <div className='left'>
                <Editor
                    onInit={(evt, editor) => (ot.current = editor)}
                    className='fp'
                    apiKey='z6dc9tmyf792whv0czwxbvpcc69957d1i9m1py3caokq1aw7'
                    init={{
                        height: 300,
                        menubar: false,
                        directionality: auto,
                        toolbar:
                            'undo redo | formatselect | fontfamily fontsize ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style:
                            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <Divider />
                <Editor
                    onInit={(evt, editor) => (tt.current = editor)}
                    className='fp'
                    apiKey='z6dc9tmyf792whv0czwxbvpcc69957d1i9m1py3caokq1aw7'
                    init={{
                        directionality: auto,
                        height: 300,
                        menubar: false,
                        toolbar:
                            'undo redo | formatselect | fontfamily fontsize ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style:
                            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
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
                <Button variant='contained' onClick={handleChange}>
                    ئۆرۈش
                </Button>
            </div>
        </div>
    );
}

export default App;
