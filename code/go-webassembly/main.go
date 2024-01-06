// Copyright 2018 The Ebiten Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"bytes"
	"fmt"
	"image"
	_ "image/png"
	"log"

	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/ebitenutil"
	"github.com/hajimehoshi/ebiten/v2/examples/resources/images"
)

const (
	screenWidth  = 240
	screenHeight = 240
)

const (
	tileSize = 16
)

var (
	tilesImage *ebiten.Image
)

func init() {
	// Decode an image from the image file's byte slice.
	img, _, err := image.Decode(bytes.NewReader(images.Tiles_png))
	if err != nil {
		log.Fatal(err)
	}
	tilesImage = ebiten.NewImageFromImage(img)
}

type Game struct {
	app bool
	layers [][]int
}

func (g *Game) Update() error {
	return nil
}

func (g *Game) Draw(screen *ebiten.Image) {
	w := tilesImage.Bounds().Dx()
	tileXCount := w / tileSize

	// Draw each tile with each DrawImage call.
	// As the source images of all DrawImage calls are always same,
	// this rendering is done very efficiently.
	// For more detail, see https://pkg.go.dev/github.com/hajimehoshi/ebiten/v2#Image.DrawImage
	const xCount = screenWidth / tileSize
	for _, l := range g.layers {
		for i, t := range l {
			op := &ebiten.DrawImageOptions{}
			op.GeoM.Translate(float64((i%xCount)*tileSize), float64((i/xCount)*tileSize))

			sx := (t % tileXCount) * tileSize
			sy := (t / tileXCount) * tileSize
			screen.DrawImage(tilesImage.SubImage(image.Rect(sx, sy, sx+tileSize, sy+tileSize)).(*ebiten.Image), op)
		}
	}

	ebitenutil.DebugPrint(screen, fmt.Sprintf("TPS: %0.2f", ebiten.ActualTPS()))
}

func (g *Game) Layout(outsideWidth, outsideHeight int) (int, int) {
	return screenWidth, screenHeight
}

func main() {

	var f Game
	f = Game{
		app: true,
		layers: [][]int{
			{
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 218, 243, 243, 243,
		  (25*9)+18, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 218, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 243,
				243, 218, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,

				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 244, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 219, 243, 243, 243, 219, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,

				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
				243, 218, 243, 243, 243, 243, 243, 243, 243, 243, 243, 244, 243, 243, 243,
				243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,
			},
			{
				0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
				0,   (25*11)+11,   0,   (25*12)+1,   0,   26,  27,  28,  29,  30,  31,  0,   0,   0,   0,
				0,   0,   0,   0,   0,   51,  52,  53,  54,  55,  56,  0,   0,   0,   0,
				0,   (25*11)+12,   0,   (25*12)+2,   0,   76,  77,  78,  79,  80,  81,  0,   0,   0,   0,
				0,   0,   0,   0,   0,   101, 102, 103, 104, 105, 106, 0,   0,   0,   0,

				0,   (25*11)+13,   0,   (25*12)+3,   0,   126, 127, 128, 129, 130, 131, 0,   0,   0,   0,
				0,   0,   0,   0,   0,   303, 303, 245, 242, 303, 303, 0,   0,   0,   0,
				0,   0,   0,   (25*12)+4,   0,   0,   0,   245, 242, 0,   0,   0,   0,   0,   0,
				0,   0,   0,   0,   0,   0,   0,   245, 242, 0,   0,   0,   0,   0,   0,
				0,   0,   0,   0,   0,   0,   0,   245, 242, 0,   0,   0,   0,   0,   0,

				0,   58,  59,  60,  61,  0,   0,   245, 242, 0,   (25*1)+20,   (25*1)+21,   (25*1)+22,   (25*1)+23,   0,
				0,   83,  84,  85,  86,  0,   0,   245, 242, 0,   (25*2)+20,   (25*2)+21,   (25*2)+22,   (25*2)+23,   0,
				0,   108, 109, 110, 111, 0,   0,   245, 242, 0,   (25*3)+20,   (25*3)+21,   (25*3)+22,   (25*3)+23,   0,
				0,   133, 134, 135, 136, 0,   0,   245, 242, 0,   (25*4)+20,   (25*4)+21,   (25*4)+22,   (25*4)+23,   0,
				0,   0,   0,   0,   0,   0,   0,   245, 242, 0,   (25*5)+20,   (25*5)+21,   (25*5)+22,   (25*5)+23,   0,
			},
		},
	}
	g := &f

	fmt.Println(g.app)

	ebiten.SetWindowSize(screenWidth*3, screenHeight*3)
	ebiten.SetWindowTitle("Tiles (Ebitengine Demo)")
	if err := ebiten.RunGame(g); err != nil {
		log.Fatal(err)
	}
}
