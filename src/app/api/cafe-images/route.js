import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
  }

  try {
    const result = await cloudinary.search
      .expression(`folder:"${folder}"`)
      .sort_by('public_id', 'asc')
      .max_results(30)
      .execute();

    const imageUrls = result.resources.map((resource) => resource.secure_url);

    return NextResponse.json({ images: imageUrls });
  } catch (error) {
    console.error('Cloudinary API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch images from Cloudinary' }, { status: 500 });
  }
}
