import classNames from 'classnames/bind';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import { useRef, useState } from 'react';
import noImage from '~/assets/no-img.jpg';
import styles from './PostControl.module.scss';

import 'react-markdown-editor-lite/lib/index.css';
import Button from '~/components/Button/Button';
import { postActions } from '~/redux/features/post';
import { useAppDispatch, useAppSelector } from '~/hooks';

const cx = classNames.bind(styles);

function PostCreate() {
    const { isLoading } = useAppSelector((state) => state.post);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const [previewImage, setPreviewImage] = useState<string>('');
    const [imageUpload, setImageUpload] = useState<File | undefined>(undefined);
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleAddAvatar = () => {
        inputFileRef.current?.click();
    };

    const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (typeof e.target.files[0] !== 'undefined') {
                const imageUpload = e.target.files[0];
                setImageUpload(imageUpload);
                const objImageUrl = URL.createObjectURL(imageUpload);
                setPreviewImage(objImageUrl);
            }
        }
    };

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleEditorChange = ({
        html,
        text,
    }: {
        html: string;
        text: string;
    }) => {
        setContent(text);
    };

    const handleCreatePost = async () => {
        if (imageUpload) {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            formData.append('thumbnail', imageUpload, 'thumbnail');
            formData.append('content', content);
            dispatch(
                postActions.createPost({
                    formData,
                })
            );
        }
    };

    return (
        <div className={cx('post-control')}>
            <div className={cx('post-control__top')}>
                <div className={cx('post-control__avt')}>
                    <input
                        accept="image/*"
                        ref={inputFileRef}
                        type="file"
                        hidden
                        onChange={handlePreviewImage}
                    />
                    <img
                        src={previewImage || noImage}
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
                            onClick={() => setPreviewImage('')}
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
                    loading={isLoading}
                    text="Tạo bài viết"
                    backColor="var(--color-success)"
                    onClick={handleCreatePost}
                ></Button>
            </div>
        </div>
    );
}

export default PostCreate;
