import { Circle } from 'better-react-spinkit'

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img 
                    src="https://1.bp.blogspot.com/-PM8_Rig8V0M/XxFkv-2f3hI/AAAAAAAACSU/vB1BqbuhFCMyJ8OGCVstFiMLFmavCLqrwCPcBGAYYCw/s1600/whatsapp-logo-1.png"
                    alt="logo" 
                    style={{ marginBottom: 10 }}
                    height={200}
                />

                <Circle color="#3cbc28" size={60} />
            </div>
        </center>
    )
}

export default Loading
