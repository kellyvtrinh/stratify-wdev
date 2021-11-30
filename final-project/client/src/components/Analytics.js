import React, { useState } from 'react';
import {Bar, Line } from 'react-chartjs-2';
import Sidebar from './Sidebar'
import { useDataLayerValue } from '../../src/DataLayer'
import "./Analytics.css"

import { Chart as ChartJS } from 'chart.js/auto'
import Chart from "react-google-charts";
 

/*
Homepage: consists of sidebar, favorite artists, and favorite tracks. 
Body component contains favorite artist and favorite tracks.
*/

function Analytics() {

    const [{ user_playlists, top_track }, dispatch] = useDataLayerValue();
    

    // cardHeight={50} cardWidth={200} itemWidth={800}

    console.log(top_track)


    var top_tracks_timeline = new Array(top_track?.items?.length);

    for (const i in top_track?.items) {
        var track = top_track.items[i];
        var date = track.album.release_date.split('-');
        var duration = track.duration_ms;
        var start_date = new Date(date[0], date[1], date[2]);
        var end_date = new Date(start_date.getTime() + duration);
        top_tracks_timeline[i] = [i, track.name, start_date, end_date];

    }
    console.log("top_tracks_timeline", top_tracks_timeline)

 
    return (
        
        <div className="analytics">
            <Sidebar />

            <div className="analytics_body">
            <div className="no_tracks">
            <Bar
                data={{
                    labels: user_playlists?.items?.map((playlist) => (playlist.name)),
                    datasets: [
                    {
                        label: 'Number of tracks your playlists',
                        backgroundColor: '#2A6041',
                        borderWidth: 0,
                        data: user_playlists?.items?.map((playlist) => (playlist.tracks.total)),
                    }
                    ]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false
                }}
            />
            </div>
            
            <div className="timeline">
                <Chart
                width={'100%'}
                height={'100%'}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                    { type: 'string', id: 'Term' },
                    { type: 'string', id: 'Name' },
                    { type: 'date', id: 'Start' },
                    { type: 'date', id: 'End' },
                    ],
                    ...top_tracks_timeline
                ]}
                options={{
                    timeline: { 
                        singleColor: "white", 
                        rowLabelStyle: {
                            fontName: 'Poppins',
                            fontSize: 15,
                            color: 'black',
                          },
                        barLabelStyle: {
                            fontSize: 15,
                            fontName: 'Poppins',
                          }},
                    backgroundColor: '#1DB954',
                  }}
                rootProps={{ 'data-testid': '2' }}
                />

             </div>

            </div>
            
            



           

        </div>

    )

}

export default Analytics
