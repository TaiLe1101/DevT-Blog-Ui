import classNames from 'classnames/bind';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { Col, Row } from 'antd';

import styles from './PostControl.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function PostEdit() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleEditorChange = (state: EditorState) => {
        setEditorState(state);
    };

    const saveContent = () => {
        const contentState = editorState.getCurrentContent();
        const contentJson = convertToRaw(contentState);
        console.log(contentJson);
    };
    const handleKeyCommand = (command: string, editorState: EditorState) => {
        if (command === 'bold') {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
            return 'handled';
        }
        return 'not-handled';
    };

    return (
        <div className={cx('post-edit')}>
            <div>
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    handleKeyCommand={handleKeyCommand}
                />
                <button onClick={saveContent}>Lưu nội dung</button>
            </div>
            <Row gutter={[16, 16]}>
                <Col span={24} lg={{ span: 12 }}>
                    <div className={cx('post-edit__text-editor')}>
                        <div className={cx('post-edit__controls')}></div>
                    </div>
                </Col>
                <Col span={24} lg={{ span: 12 }}></Col>
            </Row>
        </div>
    );
}

export default PostEdit;
