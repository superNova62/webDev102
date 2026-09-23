import Event from "./Event";

const Landmarks = () => {
  return (
        <div classname="Landmarks">
            <table>
                <thead>
                <tr>
                    <th>
                        <img src="src/assets/hollywood_sign.jpeg" alt="Hollywood Sign" width="250" height="200"/>
                        Hollywood Sign
                        <Event event=<a href='https://www.hollywoodsign.org/#Home'>'View More'</a> />
                    </th>
                    <th>
                        <img src="src/assets/chinese_theatre.jpg" alt="TCL Chinese Theatre" width="250" height="200"/>
                        TCL Chinese Theatre
                        <Event event=<a href='https://www.tclchinesetheatres.com'>'View More'</a> />
                    </th>
                    <th>
                        <img src="src/assets/griffith_observatory.jpg" alt="Griffith Observatory" width="250" height="200"/>
                        Griffith Observatory
                        <Event event=<a href='https://griffithobservatory.lacity.gov'>'View More'</a> />
                    </th>
                    <th>
                        <img src="src/assets/santa_monica_pier.jpg" alt="Santa Monica Pier" width="250" height="200"/>
                        Santa Monica Pier
                        <Event event=<a href='https://www.santamonicapier.org'>'View More'</a> />
                    </th>
                    <th>
                        <img src="src/assets/dodgers_stadium.jpg" alt="Dodgers Stadium" width="250" height="200"/>
                        Dodgers Stadium
                        <Event event=<a href='https://www.mlb.com/dodgers/ballpark'>'View More'</a> />
                    </th>
                    <th>
                        <img src="src/assets/la_museum_of_art.jpg" alt="Los Angeles County Museum of Art" width="250" height="200"/>
                        Los Angeles County Museum of Art
                        <Event event=<a href='https://www.lacma.org'>'View More'</a> />
                    </th>
                    <th>
                    <img src="src/assets/angels_railway.jpeg" alt="Angels Flight Railway" width="250" height="200"/>
                        Angels Flight Railway
                        <Event event=<a href='https://www.angelsflight.org'>'View More'</a> />
                    </th>
                    <th>
                    <img src="src/assets/watts_towers.jpg" alt="Watts Towers" width="250" height="200"/>
                        Watts Tower
                        <Event event=<a href='https://www.wattstowers.org'>'View More'</a> />
                    </th>
                    <th>
                    <img src="src/assets/walt_disney_concert_hall.jpg" alt="Walt Disney Concert Hall" width="250" height="200"/>
                        Walt Disney Concert Hall
                        <Event event=<a href='https://www.laphil.com/visit/plan-your-visit'>'View More'</a> />
                    </th>
                    <th>
                    <img src="src/assets/the_getty.jpg" alt="The Getty" width="250" height="200"/>
                        The Getty
                        <Event event=<a href='https://www.getty.edu'>'View More'</a> />
                    </th>
                </tr>
                </thead>
            </table>
        
        </div>
    )
}

export default Landmarks;