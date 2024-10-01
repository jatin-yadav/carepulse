'use client'
import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import uploadImageIcon from "@/public/assets/icons/upload.svg"

type FileUploaderProps = {
    files: File[] | undefined,
    onChange: (file: File[]) => void
}
const FileUploader = ({ files, onChange }: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className='file-upload'>
            <input {...getInputProps()} />
            {
                files && files.length > 0 ? (
                    <Image className="max-h-[400px] overflow-hidden object-cover"
                        src={convertFileToUrl(files[0])}
                        alt='uploaded Image'
                        width={1000}
                        height={1000}
                    />
                ) : (<>
                    <Image
                        src={uploadImageIcon}
                        alt='upload'
                        width={40}
                        height={40}
                    />
                    <div className='file-upload_label'>
                        <p className='text-14-regular'>
                            <span className='text-green-500'>Click to upload</span> or drag and drop
                        </p>
                        <p>SVG, PNG, JPG or Gif {`(max 800x400)`}</p>
                    </div>
                </>)
            }
        </div>
    )
}

export default FileUploader;