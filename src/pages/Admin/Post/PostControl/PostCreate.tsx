import classNames from 'classnames/bind';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import { useRef, useState } from 'react';
import noImage from '~/assets/no-img.jpg';
import styles from './PostControl.module.scss';

import 'react-markdown-editor-lite/lib/index.css';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function PostCreate() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [previewImg, setPreviewImg] = useState<string | null>(null);

    const [fileImg, setFileImg] = useState<File>();
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleAddAvatar = () => {
        inputFileRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImg(reader.result as string);
            };

            reader.readAsDataURL(selectedFile);

            setFileImg(selectedFile);
        }
    };

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({
        html,
        text,
    }: {
        html: string;
        text: string;
    }) {
        console.log('handleEditorChange', html, text);
    }

    return (
        <div className={cx('post-control')}>
            <div className={cx('post-control__top')}>
                <div className={cx('post-control__avt')}>
                    <input
                        accept="image/*"
                        ref={inputFileRef}
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                    <img
                        src={previewImg || noImage}
                        alt="avatar"
                        className={cx('post-control__img')}
                    />

                    <div className={cx('post-control__wrapper-btn')}>
                        <button
                            className={cx(
                                'post-control__btn',
                                'post-control__btn--edit'
                            )}
                            onClick={handleAddAvatar}
                        >
                            <i
                                className={cx(
                                    'uil',
                                    'uil-edit',
                                    'post-control__icon'
                                )}
                            ></i>
                        </button>
                        <button
                            className={cx(
                                'post-control__btn',
                                'post-control__btn--delete'
                            )}
                            onClick={() => setPreviewImg(null)}
                        >
                            <i
                                className={cx(
                                    'uil',
                                    'uil-times-circle',
                                    'post-control__icon'
                                )}
                            ></i>
                        </button>
                    </div>
                </div>

                <div className={cx('post-control__info')}>
                    <div className={cx('post-control__wrapper-control')}>
                        <label
                            htmlFor="#"
                            className={cx('post-control__label')}
                        >
                            Tiêu đề
                        </label>
                        <input
                            type="text"
                            className={cx('post-control__input')}
                            placeholder="Nhập tiêu đề... "
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className={cx('post-control__wrapper-control')}>
                        <label
                            htmlFor="#"
                            className={cx('post-control__label')}
                        >
                            Tóm tắt
                        </label>
                        <textarea
                            cols={30}
                            rows={8}
                            className={cx(
                                'post-control__input',
                                'post-control__input--desc'
                            )}
                            placeholder="Nhập tóm tắt bài viết..."
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className={cx('post-control__body')}>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={handleEditorChange}
                    placeholder="Input contents"
                    className={cx('post-control__editor')}
                />
            </div>

            <div className={cx('post-control__bot')}>
                <Button
                    text="Tạo bài viết"
                    backColor="var(--color-success)"
                ></Button>
            </div>
        </div>
    );
}

export default PostCreate;
