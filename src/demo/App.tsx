import React, { useState } from 'react';
import {
  Button,
  Input,
  Typography,
  QuantityStepper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  TopAppBar,
  Sheet,
  FormGroup,
} from '../index';

export function App() {
  const [quantity, setQuantity] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div style={{ paddingBottom: 80 }}>
      <TopAppBar
        title="Eater Design System"
        trailing={
          <>
            <Button variant="ghost" size="small">
              Menu
            </Button>
          </>
        }
      />

      <main style={{ maxWidth: 480, margin: '0 auto', padding: 24 }}>
        <Typography variant="titleM" style={{ marginBottom: 24 }}>
          Foundation & Primitives
        </Typography>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Buttons
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" fullWidth>
              Full width
            </Button>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Inputs
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Label" placeholder="Placeholder" />
            <Input label="With message" placeholder="Message" message="Helper text" />
            <Input label="Error" placeholder="Error state" message="Required field" error />
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Typography
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Typography variant="titleL">Title L (Bayon)</Typography>
            <Typography variant="titleS">Title S</Typography>
            <Typography variant="h1">Heading 1 (Inter)</Typography>
            <Typography variant="body1">Body text – 16px regular</Typography>
            <Typography variant="caption">Caption – 12px medium</Typography>
          </div>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Quantity Stepper
          </Typography>
          <QuantityStepper value={quantity} onChange={setQuantity} min={0} max={10} />
        </section>

        <Typography variant="titleM" style={{ marginBottom: 24, marginTop: 48 }}>
          Compound components
        </Typography>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Card
          </Typography>
          <Card variant="elevated" padding="none">
            <CardMedia src="https://picsum.photos/400/200" alt="Placeholder" />
            <div style={{ padding: 16 }}>
              <CardHeader
                title="WARRENDALE"
                subtitle="2600 Saxonburg Way, Pittsburgh, PA 80239"
                action={
                  <Button variant="primary" size="small">
                    Button
                  </Button>
                }
              />
            </div>
          </Card>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Form group
          </Typography>
          <FormGroup label="Options" description="Select your preferences">
            <Input placeholder="Option 1" />
            <Input placeholder="Option 2" />
          </FormGroup>
        </section>

        <section style={{ marginBottom: 32 }}>
          <Typography variant="h3" style={{ marginBottom: 12 }}>
            Sheet (bottom sheet)
          </Typography>
          <Button variant="primary" onClick={() => setSheetOpen(true)}>
            Open sheet
          </Button>
          <Sheet
            open={sheetOpen}
            onClose={() => setSheetOpen(false)}
            title="Sheet title"
            showHeader
            showCloseButton
            footer={
              <Button variant="primary" fullWidth onClick={() => setSheetOpen(false)}>
                Confirm
              </Button>
            }
          >
            <Typography variant="body1">
              This is the sheet content. It can contain any content – forms, lists, or details.
            </Typography>
          </Sheet>
        </section>
      </main>
    </div>
  );
}
