import { ImageResponse } from 'next/og';

export const educationOgSize = { width: 1200, height: 630 };

export function educationOg(title: string, kicker: string) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#FBFBFE',
                    padding: '64px',
                }}
            >
                <div style={{ display: 'flex', fontSize: 28, color: '#6D28D9', fontWeight: 700 }}>
                    BrandSoft Education
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', fontSize: 56, fontWeight: 800, color: '#1E1B2E', lineHeight: 1.1 }}>
                        {title}
                    </div>
                    <div style={{ display: 'flex', marginTop: 28, fontSize: 28, color: '#047857' }}>{kicker}</div>
                </div>
            </div>
        ),
        { ...educationOgSize }
    );
}
