package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "{\"message\": \"Hello from Go!\", \"date\": \"%s\"}", time.Now().UTC())
}
